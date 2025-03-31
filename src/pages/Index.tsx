
import { ChatProvider } from "@/context/ChatContext";
import Layout from "@/components/Layout";
import ChatContainer from "@/components/ChatContainer";
import { Leaf } from "lucide-react";

const Index = () => {
  return (
    <ChatProvider>
      <Layout>
        <div className="h-[calc(100vh-8rem)] flex flex-col">
          <div className="mb-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Leaf className="h-5 w-5 text-sanjeevani" />
              <h2 className="text-2xl font-bold text-sanjeevani">Sanjeevani Botanical Helper</h2>
            </div>
            <p className="text-sm text-gray-600 mb-2">
              Ask about natural home remedies for your health concerns
            </p>
          </div>
          
          <div className="flex-1 shadow-lg rounded-lg overflow-hidden border border-sanjeevani/20">
            <ChatContainer />
          </div>
        </div>
      </Layout>
    </ChatProvider>
  );
};

export default Index;
