
import { ChatProvider } from "@/context/ChatContext";
import Layout from "@/components/Layout";
import ChatContainer from "@/components/ChatContainer";
import { Card } from "@/components/ui/card";
import { Leaf } from "lucide-react";

const Index = () => {
  return (
    <ChatProvider>
      <Layout>
        <div className="max-w-4xl mx-auto h-[calc(100vh-12rem)]">
          <div className="mb-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Leaf className="h-6 w-6 text-sanjeevani" />
              <h2 className="text-3xl font-bold text-sanjeevani">Sanjeevani Botanical Helper</h2>
            </div>
            <p className="text-gray-600">
              Ask about natural home remedies for your health concerns
            </p>
          </div>
          
          <Card className="h-full border-sanjeevani/20 overflow-hidden shadow-lg">
            <ChatContainer />
          </Card>
          
          <div className="mt-4 text-xs text-center text-gray-500">
            <p>Providing traditional wisdom for modern wellness</p>
          </div>
        </div>
      </Layout>
    </ChatProvider>
  );
};

export default Index;
