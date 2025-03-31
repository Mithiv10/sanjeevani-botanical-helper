
import { ChatProvider } from "@/context/ChatContext";
import Layout from "@/components/Layout";
import ChatContainer from "@/components/ChatContainer";
import { Leaf } from "lucide-react";

const Index = () => {
  return (
    <ChatProvider>
      <Layout>
        <div className="h-full flex flex-col">
          <div className="absolute top-4 left-0 right-0 text-center z-10">
            <div className="flex items-center justify-center gap-2">
              <Leaf className="h-5 w-5 text-sanjeevani" />
              <h2 className="text-2xl font-bold text-sanjeevani">Sanjeevani</h2>
            </div>
            <p className="text-xs text-gray-600">
              Ask about natural home remedies for your health concerns
            </p>
          </div>
          
          <div className="flex-1">
            <ChatContainer />
          </div>
        </div>
      </Layout>
    </ChatProvider>
  );
};

export default Index;
