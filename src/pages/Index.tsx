
import { ChatProvider } from "@/context/ChatContext";
import Layout from "@/components/Layout";
import ChatContainer from "@/components/ChatContainer";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <ChatProvider>
      <Layout>
        <div className="max-w-4xl mx-auto h-[calc(100vh-12rem)]">
          <div className="mb-6 text-center">
            <h2 className="text-3xl font-bold text-sanjeevani">Sanjeevani Botanical Helper</h2>
            <p className="text-gray-600 mt-2">
              Ask about natural home remedies for your health concerns
            </p>
          </div>
          
          <Card className="h-full">
            <ChatContainer />
          </Card>
        </div>
      </Layout>
    </ChatProvider>
  );
};

export default Index;
