import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollStory } from "./components/ScrollStory";
import { Scene4ExploreHome } from "./scenes/Scene4ExploreHome";

// Keep essential interactive scenes for specific functionality
import { Scene6aEmpathy } from "./scenes/Scene6aEmpathy";
import { Scene6TeenChoice } from "./scenes/Scene6TeenChoice";
import { Scene7Consequences } from "./scenes/Scene7Consequences";

import { Scene8Empathy } from "./scenes/Scene8Empathy";
import { Scene9Argument } from "./scenes/Scene9Argument";
import { Scene9aEmpathy } from "./scenes/Scene9aEmpathy";
import { Scene10Understanding } from "./scenes/Scene10Understanding";

import { Scene11SocialWorker } from "./scenes/Scene11SocialWorker";
import { Scene12SocialWork } from "./scenes/Scene12SocialWork";

import { Scene13Reflection } from "./scenes/Scene13Reflection";
import { Scene14CompassionFatigue } from "./scenes/Scene14CompassionFatigue";
import { Scene14aEmpathy } from "./scenes/Scene14aEmpathy";
import { Scene15CleanupBegins } from "./scenes/Scene15CleanupBegins";
import { Scene16TossingWithoutAsking } from "./scenes/Scene16TossingWithoutAsking";
import { Scene17AskingFirst } from "./scenes/Scene17AskingFirst";
import { Scene18Breakdown } from "./scenes/Scene18Breakdown";
import { Scene19NoEmpathy } from "./scenes/Scene19NoEmpathy";
import { Scene20Success } from "./scenes/Scene20Success";
import { Scene21Conclusion } from "./scenes/Scene21Conclusion";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Main scroll-based story experience */}
          <Route path="/" element={<ScrollStory />} />
          
          {/* Keep interactive gameplay scenes for specific functionality */}
          <Route path="/scene/4" element={<Scene4ExploreHome />} />
          
          <Route path="/scene/6a" element={<Scene6aEmpathy />} />
          <Route path="/scene/6" element={<Scene6TeenChoice />} />
          <Route path="/scene/7" element={<Scene7Consequences />} />
          
          <Route path="/scene/8" element={<Scene8Empathy />} />
          <Route path="/scene/9" element={<Scene9Argument />} />
          <Route path="/scene/9a" element={<Scene9aEmpathy />} />
          <Route path="/scene/10" element={<Scene10Understanding />} />
          
          <Route path="/scene/11" element={<Scene11SocialWorker />} />
          <Route path="/scene/12" element={<Scene12SocialWork />} />
          
          <Route path="/scene/13" element={<Scene13Reflection />} />
          <Route path="/scene/14" element={<Scene14CompassionFatigue />} />
          <Route path="/scene/14a" element={<Scene14aEmpathy />} />
          <Route path="/scene/15" element={<Scene15CleanupBegins />} />
          <Route path="/scene/16" element={<Scene16TossingWithoutAsking />} />
          <Route path="/scene/17" element={<Scene17AskingFirst />} />
          <Route path="/scene/18" element={<Scene18Breakdown />} />
          <Route path="/scene/19" element={<Scene19NoEmpathy />} />
          <Route path="/scene/20" element={<Scene20Success />} />
          <Route path="/scene/21" element={<Scene21Conclusion />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
