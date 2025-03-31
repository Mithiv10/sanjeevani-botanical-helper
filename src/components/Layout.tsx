
import { ReactNode } from "react";
import { Leaf } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-green-50 to-white">
      <header className="bg-white shadow-sm py-3">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-sanjeevani to-sanjeevani-dark flex items-center justify-center">
              <Leaf className="h-5 w-5 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-sanjeevani hidden md:block">Sanjeevani</h1>
          </div>
          <div className="text-sm text-sanjeevani-accent font-medium">
            Natural Remedies Chatbot
          </div>
        </div>
      </header>
      
      <main className="flex-1 container mx-auto py-8 px-4">
        {children}
      </main>
      
      <footer className="bg-white border-t py-4">
        <div className="container mx-auto text-center px-4">
          <p className="text-sm text-gray-500 mb-1">
            <strong className="text-sanjeevani">DISCLAIMER:</strong> The information provided by Sanjeevani is not a substitute for professional medical advice, diagnosis, or treatment.
          </p>
          <p className="text-xs text-gray-400">
            Always seek the advice of your physician or other qualified health provider with any questions you may have.
          </p>
        </div>
      </footer>
    </div>
  );
}
