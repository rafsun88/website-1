
import React from "react";
import { 
  Clipboard, ChartBar, Database, Users, Wallet, 
  FileText, Settings, TrendingUp, Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";

const AdminDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Admin Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900 flex items-center">
              <Shield className="mr-2 h-6 w-6 text-blue-600" /> 
              Admin Dashboard
            </h1>
            <div className="flex items-center">
              <span className="text-sm text-gray-500 mr-4">Admin User</span>
              <Button variant="outline" size="sm">Logout</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Dashboard Cards */}
          <DashboardCard 
            title="Transactions" 
            value="1,284" 
            description="Total incoming transactions" 
            icon={Clipboard}
            color="blue" 
          />
          
          <DashboardCard 
            title="Vendors" 
            value="24" 
            description="Active vendor accounts" 
            icon={Users}
            color="green" 
          />
          
          <DashboardCard 
            title="Total Volume" 
            value="$142,384" 
            description="Monthly transaction volume" 
            icon={TrendingUp}
            color="purple" 
          />
          
          <DashboardCard 
            title="Success Rate" 
            value="97.2%" 
            description="Transaction success rate" 
            icon={ChartBar}
            color="amber" 
          />
          
          <DashboardCard 
            title="Active Wallets" 
            value="6" 
            description="Configured payment methods" 
            icon={Wallet}
            color="rose" 
          />
          
          <DashboardCard 
            title="Agent Numbers" 
            value="38" 
            description="Registered agent accounts" 
            icon={Database}
            color="indigo" 
          />
        </div>
        
        {/* Features Section */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Management Features</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureButton 
              title="Transaction Tracking" 
              description="Monitor real-time status" 
              icon={Clipboard} 
            />
            <FeatureButton 
              title="Vendor Management" 
              description="Create and configure vendors" 
              icon={Users} 
            />
            <FeatureButton 
              title="Wallet & Agent Setup" 
              description="Configure payment methods" 
              icon={Wallet} 
            />
            <FeatureButton 
              title="Financial Reports" 
              description="Access billing and analytics" 
              icon={FileText} 
            />
          </div>
        </div>
      </main>
    </div>
  );
};

// Component for dashboard metric cards
const DashboardCard = ({ 
  title, 
  value, 
  description, 
  icon: Icon,
  color 
}: { 
  title: string; 
  value: string; 
  description: string; 
  icon: React.ElementType;
  color: string; 
}) => {
  const colorClasses: Record<string, string> = {
    blue: "bg-blue-50 text-blue-600",
    green: "bg-green-50 text-green-600",
    purple: "bg-purple-50 text-purple-600",
    amber: "bg-amber-50 text-amber-600",
    rose: "bg-rose-50 text-rose-600",
    indigo: "bg-indigo-50 text-indigo-600",
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-gray-700">{title}</h3>
        <div className={`p-2 rounded-full ${colorClasses[color]}`}>
          <Icon className="h-6 w-6" />
        </div>
      </div>
      <div>
        <p className="text-3xl font-bold text-gray-900">{value}</p>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
      </div>
    </div>
  );
};

// Component for feature buttons
const FeatureButton = ({ 
  title, 
  description, 
  icon: Icon 
}: { 
  title: string; 
  description: string; 
  icon: React.ElementType; 
}) => {
  return (
    <button className="flex flex-col items-start p-5 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition-colors text-left">
      <div className="p-2 mb-3 bg-blue-50 rounded-md">
        <Icon className="h-5 w-5 text-blue-600" />
      </div>
      <h3 className="text-md font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-500 mt-1">{description}</p>
    </button>
  );
};

export default AdminDashboard;
