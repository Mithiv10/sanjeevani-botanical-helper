
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-green-50 to-white">
      <header className="bg-white shadow-sm p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-sanjeevani flex items-center justify-center">
              <span className="text-white font-bold">S</span>
            </div>
            <h1 className="text-2xl font-bold text-sanjeevani hidden md:block">Sanjeevani</h1>
          </div>
          <div className="text-sm text-sanjeevani-accent">
            Natural Remedies Chatbot
          </div>
        </div>
      </header>
      
      <main className="flex-1 container mx-auto py-6 px-4">
        {children}
      </main>
      
      <footer className="bg-white border-t py-4">
        <div className="container mx-auto text-center text-sm text-gray-500">
          <p>
            <strong className="text-sanjeevani">DISCLAIMER:</strong> The information provided by Sanjeevani is not a substitute for professional medical advice, diagnosis, or treatment.
          </p>
        </div>
      </footer>
    </div>
  );
}
