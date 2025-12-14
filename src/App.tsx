import { Chatbot } from './components/Chatbot'

function App() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="max-w-2xl text-center space-y-4">
                <h1 className="text-4xl font-bold text-gray-900">Chatbot Integration Demo</h1>
                <p className="text-lg text-gray-600">
                    This is a demo page showing the chatbot integration.
                    Look at the bottom right corner!
                </p>
                <div className="p-6 bg-white rounded-lg shadow-md text-left">
                    <h2 className="text-xl font-semibold mb-2">How to use:</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Click the message icon in the bottom right</li>
                        <li>Type a message to start chatting</li>
                        <li>The chatbot uses the configured OpenRouter API</li>
                    </ul>
                </div>
            </div>

            <Chatbot
                title="Assistant Démo"
                greeting="Bonjour ! Je suis la version autonome du chatbot. Comment puis-je vous aider ?"
            />
        </div>
    )
}

export default App
