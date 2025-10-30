import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

export default function Gallery() {
  const [selectedImageId, setSelectedImageId] = useState<number | null>(null);

  const images: GalleryImage[] = [
    {
      id: 1,
      src: "https://cdn.builder.io/api/v1/image/assets%2F06dfe1409ccc42b5babece67b54a91f6%2Fd7f43df181e841c0a18297b4ca01dbef?format=webp&width=800",
      alt: "Hiking group in Ethiopian highlands",
    },
    {
      id: 2,
      src: "https://cdn.builder.io/api/v1/image/assets%2F06dfe1409ccc42b5babece67b54a91f6%2Fedc619c106074c0382549673f363ba25?format=webp&width=800",
      alt: "Lalibela rock formations",
    },
    {
      id: 3,
      src: "https://cdn.builder.io/api/v1/image/assets%2F06dfe1409ccc42b5babece67b54a91f6%2F94b1fa7e21ab4c6c9a27a1e22c1fe2ba?format=webp&width=800",
      alt: "Hiking in volcanic landscape",
    },
    {
      id: 5,
      src: "https://cdn.builder.io/api/v1/image/assets%2F06dfe1409ccc42b5babece67b54a91f6%2F24f218013fb54c8b8db6079bcb9d7573?format=webp&width=800",
      alt: "Sunset hiking adventure",
    },
    {
      id: 6,
      src: "https://cdn.builder.io/api/v1/image/assets%2F06dfe1409ccc42b5babece67b54a91f6%2F5f5ff31daf2c4d0ca857690bd889b8bc?format=webp&width=800",
      alt: "Mountain climbing",
    },
    {
      id: 8,
      src: "https://cdn.builder.io/api/v1/image/assets%2F06dfe1409ccc42b5babece67b54a91f6%2Ff145dc03fc6b475395cc3d346dee016e?format=webp&width=800",
      alt: "Mountain peak experience",
    },
    {
      id: 11,
      src: "https://cdn.builder.io/api/v1/image/assets%2F06dfe1409ccc42b5babece67b54a91f6%2F48244cc298b94da4821341f3c98a714b?format=webp&width=800",
      alt: "Rocky terrain hiking",
    },
    {
      id: 12,
      src: "https://cdn.builder.io/api/v1/image/assets%2F06dfe1409ccc42b5babece67b54a91f6%2F329be6a81842486e93bf87b68aeebe24?format=webp&width=800",
      alt: "Mountain landscape",
    },
    {
      id: 13,
      src: "https://cdn.builder.io/api/v1/image/assets%2F06dfe1409ccc42b5babece67b54a91f6%2F1b9f9d27e125467d9abf0313d749ddf1?format=webp&width=800",
      alt: "Trail hiking group",
    },
    {
      id: 14,
      src: "https://cdn.builder.io/api/v1/image/assets%2F06dfe1409ccc42b5babece67b54a91f6%2F04f9da38286a4aeda7a5ff8f839c6ee1?format=webp&width=800",
      alt: "Valley exploration",
    },
    {
      id: 15,
      src: "https://cdn.builder.io/api/v1/image/assets%2F06dfe1409ccc42b5babece67b54a91f6%2Fcd5d44064ee44ae4a9eb52d3607dc4b5?format=webp&width=800",
      alt: "Mountain ridge walking",
    },
    {
      id: 16,
      src: "https://cdn.builder.io/api/v1/image/assets%2F06dfe1409ccc42b5babece67b54a91f6%2F0d4a47ad9fed40f78e2746167645613e?format=webp&width=800",
      alt: "Hiking adventure",
    },
    {
      id: 17,
      src: "https://cdn.builder.io/api/v1/image/assets%2F06dfe1409ccc42b5babece67b54a91f6%2F9ff1bb2c70b34d479ec2d872798ef83a?format=webp&width=800",
      alt: "Mountain climbing expedition",
    },
    {
      id: 18,
      src: "https://cdn.builder.io/api/v1/image/assets%2F06dfe1409ccc42b5babece67b54a91f6%2F817087b1c5b14d048049fa11dac3096e?format=webp&width=800",
      alt: "Scenic hiking trail",
    },
    {
      id: 19,
      src: "https://cdn.builder.io/api/v1/image/assets%2F06dfe1409ccc42b5babece67b54a91f6%2F3611fe23a337455698bff543a7ed6793?format=webp&width=800",
      alt: "Mountain exploration",
    },
    {
      id: 20,
      src: "https://cdn.builder.io/api/v1/image/assets%2F06dfe1409ccc42b5babece67b54a91f6%2F8067445ea5984778bef2a56e90b524c1?format=webp&width=800",
      alt: "Plateau landscape",
    },
    {
      id: 21,
      src: "https://cdn.builder.io/api/v1/image/assets%2F06dfe1409ccc42b5babece67b54a91f6%2Feada0515f6c445689d94696e6549f40f?format=webp&width=800",
      alt: "Volcanic landscape",
    },
    {
      id: 22,
      src: "https://cdn.builder.io/api/v1/image/assets%2F06dfe1409ccc42b5babece67b54a91f6%2Fdc9d4033eb2c4af0aef3ff83a9694e1f?format=webp&width=800",
      alt: "Rock formations hiking",
    },
    {
      id: 23,
      src: "https://cdn.builder.io/api/v1/image/assets%2F06dfe1409ccc42b5babece67b54a91f6%2F8e9c7ee200354e4f8d8169667444845a?format=webp&width=800",
      alt: "Mountain valley view",
    },
    {
      id: 24,
      src: "https://cdn.builder.io/api/v1/image/assets%2F06dfe1409ccc42b5babece67b54a91f6%2F2b81f11cbd9544b6855aa63830b706eb?format=webp&width=800",
      alt: "Highland hiking",
    },
    {
      id: 25,
      src: "https://cdn.builder.io/api/v1/image/assets%2F06dfe1409ccc42b5babece67b54a91f6%2F778888bffb9941af93c63331ca418b83?format=webp&width=800",
      alt: "Climbing adventure",
    },
    {
      id: 26,
      src: "https://cdn.builder.io/api/v1/image/assets%2F06dfe1409ccc42b5babece67b54a91f6%2Fb05dc105985748d39dc5a5f0a77b432d?format=webp&width=800",
      alt: "Mountain nature",
    },
    {
      id: 27,
      src: "https://cdn.builder.io/api/v1/image/assets%2F06dfe1409ccc42b5babece67b54a91f6%2F40ca1eceaf7646b1aa758c1ca7b1de7f?format=webp&width=800",
      alt: "Hiking through wilderness",
    },
    {
      id: 28,
      src: "https://cdn.builder.io/api/v1/image/assets%2F06dfe1409ccc42b5babece67b54a91f6%2Fe6b99f05a3b0443190de90ca0d3807d0?format=webp&width=800",
      alt: "Sunset on the mountain",
    },
    {
      id: 29,
      src: "https://cdn.builder.io/api/v1/image/assets%2F06dfe1409ccc42b5babece67b54a91f6%2Fa5827fe43f464af38cac3d9f74f0313d?format=webp&width=800",
      alt: "Community hiking event",
    },
    {
      id: 30,
      src: "https://cdn.builder.io/api/v1/image/assets%2F06dfe1409ccc42b5babece67b54a91f6%2F8767e46741944c528f8e93b9a1c85711?format=webp&width=800",
      alt: "Outdoor adventure",
    },
    {
      id: 31,
      src: "https://cdn.builder.io/api/v1/image/assets%2F06dfe1409ccc42b5babece67b54a91f6%2F9d1d8bfced3a4d839fd97d00c81afb3a?format=webp&width=800",
      alt: "Trekking experience",
    },
    {
      id: 32,
      src: "https://cdn.builder.io/api/v1/image/assets%2F06dfe1409ccc42b5babece67b54a91f6%2F514dbc6272da4032bbade166cff35221?format=webp&width=800",
      alt: "Mountain expedition",
    },
    {
      id: 33,
      src: "https://cdn.builder.io/api/v1/image/assets%2F06dfe1409ccc42b5babece67b54a91f6%2F23a8751faad84df1935349fc35368172?format=webp&width=800",
      alt: "Alpine hiking",
    },
    {
      id: 34,
      src: "https://cdn.builder.io/api/v1/image/assets%2F06dfe1409ccc42b5babece67b54a91f6%2F3a6a94d83bf04cbcb566e7c794157b54?format=webp&width=800",
      alt: "Scenic mountain trail",
    },
    {
      id: 37,
      src: "https://cdn.builder.io/api/v1/image/assets%2F06dfe1409ccc42b5babece67b54a91f6%2F05c176e783b04146b48ec63964061dbb?format=webp&width=800",
      alt: "Natural landscape",
    },
    {
      id: 38,
      src: "https://cdn.builder.io/api/v1/image/assets%2F06dfe1409ccc42b5babece67b54a91f6%2F7b59eeab175449938aaef2105ccb2e37?format=webp&width=800",
      alt: "Mountain adventure",
    },
    {
      id: 42,
      src: "https://cdn.builder.io/api/v1/image/assets%2F06dfe1409ccc42b5babece67b54a91f6%2Fa57e4df0c7bc478db6bd34936334e3cf?format=webp&width=800",
      alt: "Group hiking experience",
    },
    {
      id: 44,
      src: "https://cdn.builder.io/api/v1/image/assets%2F06dfe1409ccc42b5babece67b54a91f6%2F04228b8e4fdb42f69cb526c0d0717b5f?format=webp&width=800",
      alt: "Mountain peaks",
    },
    {
      id: 45,
      src: "https://cdn.builder.io/api/v1/image/assets%2F06dfe1409ccc42b5babece67b54a91f6%2F654a6dff2cf24de1b3f2b1e7143796a6?format=webp&width=800",
      alt: "Hiking trail",
    },
    {
      id: 46,
      src: "https://cdn.builder.io/api/v1/image/assets%2F06dfe1409ccc42b5babece67b54a91f6%2Fd7f8f225705d4afc8d8e974ad064f5eb?format=webp&width=800",
      alt: "Mountain exploration",
    },
  ];

  const selectedImage = images.find((img) => img.id === selectedImageId);
  const selectedIndex = selectedImage
    ? images.findIndex((img) => img.id === selectedImage.id)
    : -1;

  const handlePrevious = () => {
    if (selectedIndex > 0) {
      setSelectedImageId(images[selectedIndex - 1].id);
    }
  };

  const handleNext = () => {
    if (selectedIndex < images.length - 1) {
      setSelectedImageId(images[selectedIndex + 1].id);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedImageId === null) return;
    if (e.key === "ArrowLeft") handlePrevious();
    if (e.key === "ArrowRight") handleNext();
    if (e.key === "Escape") setSelectedImageId(null);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-green-50 to-emerald-100">
        {/* Page Header */}
        <div className="bg-gradient-to-r from-emerald-700 via-green-600 to-emerald-600 border-b border-emerald-700/20 py-12 md:py-16 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Photo Gallery
              </h1>
              <p className="text-lg text-emerald-50 max-w-2xl mx-auto">
                Explore the stunning landscapes and hiking adventures across
                Ethiopia through our community's lens
              </p>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {images.map((image) => (
              <div
                key={image.id}
                onClick={() => setSelectedImageId(image.id)}
                className="group relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer border border-emerald-200/50"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.style.backgroundColor = "#d1fae5";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 from-0% via-transparent to-transparent group-hover:from-emerald-900/50 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedImageId !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImageId(null)}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <div
              className="relative max-w-4xl w-full max-h-screen flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImageId(null)}
                className="absolute -top-12 -right-12 md:top-4 md:right-4 p-2 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/40 text-white transition-colors z-10"
                aria-label="Close"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Previous Button */}
              {selectedIndex > 0 && (
                <button
                  onClick={handlePrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/40 text-white transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
              )}

              {/* Image */}
              {selectedImage && (
                <div className="flex flex-col items-center">
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                    onError={(e) => {
                      const img = e.target as HTMLImageElement;
                      img.style.backgroundColor = "#1f2937";
                    }}
                  />
                  <p className="mt-4 text-emerald-200 text-sm">
                    {selectedIndex + 1} of {images.length}
                  </p>
                </div>
              )}

              {/* Next Button */}
              {selectedIndex < images.length - 1 && (
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/40 text-white transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
