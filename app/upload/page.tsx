import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FileUpload from "@/components/upload/FileUpload";

export default function UploadPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold tracking-tight mb-2">Upload Study Materials</h1>
            <p className="text-muted-foreground mb-8">
              Upload your lecture notes, slides, or textbook chapters to generate practice questions.
            </p>
            
            <FileUpload />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}