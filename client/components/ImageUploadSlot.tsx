import { useState } from "react";
import { Upload, Image as ImageIcon, X } from "lucide-react";

interface ImageUploadSlotProps {
  onImageSelect?: (imageUrl: string) => void;
  placeholder?: string;
  className?: string;
  height?: string;
  showRemoveButton?: boolean;
  initialImage?: string;
  isDragAndDrop?: boolean;
}

export default function ImageUploadSlot({
  onImageSelect,
  placeholder = "Upload Image",
  className = "",
  height = "h-64",
  showRemoveButton = true,
  initialImage,
  isDragAndDrop = true
}: ImageUploadSlotProps) {
  const [image, setImage] = useState<string | undefined>(initialImage);
  const [isDragging, setIsDragging] = useState(false);

  const handleImageUpload = () => {
    // Placeholder for file upload - will be implemented with backend
    const sampleImages = [
      "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1486022069284-348e03132178?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop"
    ];
    const randomImage = sampleImages[Math.floor(Math.random() * sampleImages.length)];
    setImage(randomImage);
    onImageSelect?.(randomImage);
  };

  const handleRemoveImage = () => {
    setImage(undefined);
    onImageSelect?.("");
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    // Simulate file drop - will be implemented with backend
    handleImageUpload();
  };

  if (image) {
    return (
      <div className={`relative group ${height} ${className}`}>
        <img
          src={image}
          alt="Uploaded content"
          className={`w-full ${height} object-cover rounded-lg`}
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 rounded-lg flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex space-x-2">
            <button
              onClick={handleImageUpload}
              className="bg-white/90 hover:bg-white text-gray-700 p-2 rounded-full shadow-lg transition-colors duration-200"
              title="Change Image"
            >
              <Upload className="h-4 w-4" />
            </button>
            {showRemoveButton && (
              <button
                onClick={handleRemoveImage}
                className="bg-red-500/90 hover:bg-red-500 text-white p-2 rounded-full shadow-lg transition-colors duration-200"
                title="Remove Image"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`
        border-2 border-dashed border-border rounded-lg transition-all duration-200 cursor-pointer
        hover:border-primary/50 hover:bg-primary/5 ${height} ${className}
        ${isDragging ? 'border-primary bg-primary/10' : ''}
        ${isDragAndDrop ? 'group' : ''}
      `}
      onClick={handleImageUpload}
      onDragOver={isDragAndDrop ? handleDragOver : undefined}
      onDragLeave={isDragAndDrop ? handleDragLeave : undefined}
      onDrop={isDragAndDrop ? handleDrop : undefined}
    >
      <div className="h-full flex flex-col items-center justify-center text-center p-6">
        <div className="space-y-4">
          <div className="relative">
            <ImageIcon className="h-12 w-12 text-muted-foreground mx-auto" />
            <Upload className="h-6 w-6 text-primary absolute -bottom-1 -right-1 bg-white rounded-full p-1" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">{placeholder}</p>
            {isDragAndDrop && (
              <p className="text-xs text-muted-foreground mt-2">
                Click to upload or drag & drop
              </p>
            )}
            <p className="text-xs text-muted-foreground mt-1">
              JPG, PNG up to 10MB
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
