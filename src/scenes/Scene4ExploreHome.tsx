import React, { useEffect, useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import { SceneTransition } from '@/components/SceneTransition';
import { StoryButton } from '@/components/StoryButton';
import hoardedRoomImage from '@/assets/cluttered-hdb-flat.jpg';
import newspaperImage from '@/assets/item-newspaper-realistic.png';
import boxImage from '@/assets/item-box-realistic.png';
import clothesImage from '@/assets/item-clothes-realistic.png';
import booksImage from '@/assets/item-books-realistic.png';
import teddyImage from '@/assets/item-teddy-realistic.png';

interface InteractiveItem {
  id: string;
  name: string;
  position: { x: string; y: string };
  story: string;
  emotionalValue: string;
}

const interactiveItems: InteractiveItem[] = [
  {
    id: 'scenario1',
    name: 'Newspaper Dilemma',
    position: { x: '29%', y: '35%' },
    story: "A moment where someone might toss an item without asking",
    emotionalValue: "This scenario will demonstrate the importance of asking permission"
  },
  {
    id: 'scenario2',
    name: 'Photoframes',
    position: { x: '7%', y: '69%' },
    story: "When emotions become overwhelming during the process",
    emotionalValue: "Understanding how to respond to emotional breakdowns"
  },
  {
    id: 'scenario3',
    name: 'Bath Towel',
    position: { x: '70%', y: '32%' },
    story: "What happens when empathy is completely absent",
    emotionalValue: "The consequences of acting without understanding"
  },
  {
    id: 'scenario4',
    name: 'Old sweater',
    position: { x: '43%', y: '90%' },
    story: "When everything comes together with empathy and patience",
    emotionalValue: "The positive outcome of empathetic approach"
  }
];

export const Scene4ExploreHome: React.FC = () => {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState<InteractiveItem | null>(null);
  const [exploredItems, setExploredItems] = useState<Set<string>>(new Set());
  const [thrownAwayItems, setThrownAwayItems] = useState<Set<string>>(new Set());
  const [draggedItem, setDraggedItem] = useState<InteractiveItem | null>(null);
  const [isDraggingOverTrashcan, setIsDraggingOverTrashcan] = useState(false);

  // Load thrown away items from localStorage on mount
  useEffect(() => {
    const savedThrownAwayItems = localStorage.getItem('scene4ThrownAwayItems');
    if (savedThrownAwayItems) {
      const parsedItems = new Set<string>(JSON.parse(savedThrownAwayItems) as string[]);
      setThrownAwayItems(parsedItems);
    }
  }, []);

  // Save thrown away items to localStorage when it changes
  useEffect(() => {
    const itemsArray = Array.from(thrownAwayItems);
    localStorage.setItem('scene4ThrownAwayItems', JSON.stringify(itemsArray));
  }, [thrownAwayItems]);

  // Determine items still available (not thrown away)
  const availableItems = interactiveItems.filter(item => !thrownAwayItems.has(item.id));

  // Handle drop onto trashcan
  const handleItemDrop = (item: InteractiveItem) => {
    setSelectedItem(item);
    const newExploredItems = new Set(exploredItems);
    newExploredItems.add(item.id);
    setExploredItems(newExploredItems);

    const newThrownAwayItems = new Set(thrownAwayItems);
    newThrownAwayItems.add(item.id);
    setThrownAwayItems(newThrownAwayItems);

    const itemsArray = Array.from(newThrownAwayItems);
    localStorage.setItem('scene4ThrownAwayItems', JSON.stringify(itemsArray));

    const sceneNumbers = [16, 17, 18, 20];
    const currentIndex = newThrownAwayItems.size - 1; // Use the updated set size, minus 1 for zero-based index
    const targetScene = sceneNumbers[currentIndex];
    
    if (targetScene) {
      navigate(`/scene/${targetScene}`);
    }
  };

  return (
    <SceneTransition>
      <div className="min-h-screen relative">
        {/* Background image (dirty house) */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${hoardedRoomImage}')` }}
        >
          {/* Optional overlay */}
          <div className="absolute inset-0 bg-white/30" />
        </div>

        {/* Header */}
        <div className="relative z-10 p-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-4 text-highlight">
              The Cleanup
            </h1>
            <div className="narrative-text max-w-2xl mx-auto mb-6">
              <div className="bg-card/90 backdrop-blur-sm p-4 rounded-lg border border-card-border">
                <p className="text-sm mb-2">
                  Help Fion and the other social workers with the cleanup of Madam Leong's flat.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Room Image */}
        <div className="relative z-10 flex items-center justify-center p-8">
          <div className="relative max-w-4xl mx-auto">
            <div className="relative w-full h-auto">
              {/* Image container: Ensure it's centered */}
              <img 
                src={hoardedRoomImage} 
                alt="Hoarded room with items to clean" 
                className="w-full h-auto rounded-lg shadow-lg object-contain"
              />

              {/* Interactive dots positioned over items in the room */}
              {availableItems.map((item) => (
                <div
                  key={item.id}
                  className="absolute w-6 h-6 bg-red-500 rounded-full border-2 border-red-700 cursor-grab transform -translate-x-1/2 -translate-y-1/2 hover:scale-125 transition-transform animate-pulse hover:animate-none shadow-lg"
                  style={{ left: item.position.x, top: item.position.y }}
                  draggable
                  onDragStart={(e) => {
                    setDraggedItem(item);
                    e.dataTransfer.effectAllowed = 'move';
                    e.dataTransfer.setData('text/plain', item.id);
                  }}
                  title={item.name}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Progress + Finish */}
        <div className="absolute top-8 left-8 bg-card/90 backdrop-blur-sm p-4 rounded-lg border border-card-border">
          <p className="text-sm font-medium text-foreground">
            Items remaining: {availableItems.length}
          </p>
          {availableItems.length === 0 && (
            <StoryButton
              variant="primary"
              onClick={() => {
                localStorage.removeItem('scene4ThrownAwayItems');
                navigate('/scene/20');  {/* Update navigation target to scene 20 */}
              }}
              className="mt-2 text-sm px-4 py-2"
            >
              Finish Cleanup → 
            </StoryButton>
          )}
        </div>

        {/* Trashcan Drop Zone */}
        <div className="absolute bottom-8 right-8 z-10 flex justify-center mt-8 pb-8">
          <div
            onClick={() => console.log('Trashcan clicked!')}
            onDragOver={(e) => {
              e.preventDefault();
              e.dataTransfer.dropEffect = 'move';
            }}
            onDrop={(e) => {
              e.preventDefault();
              if (draggedItem) {
                handleItemDrop(draggedItem);
                setDraggedItem(null);
              }
              setIsDraggingOverTrashcan(false);
            }}
            onDragEnter={() => setIsDraggingOverTrashcan(true)}
            onDragLeave={() => setIsDraggingOverTrashcan(false)}
            className="w-80 h-80 flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-110"
          >
            <img 
              src={isDraggingOverTrashcan ? "/lovable-uploads/94e7ff42-bc2c-4ee4-808d-2a8500ba8035.png" : "/lovable-uploads/18489058-e09b-470b-a209-5cd7f641eb1e.png"}
              alt="Trash bag"
              className="w-full h-full object-contain transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </SceneTransition>
  );
};
