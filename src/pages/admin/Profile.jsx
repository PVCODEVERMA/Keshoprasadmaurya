import { useState } from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGlobe,
  FaBirthdayCake,
  FaBook,
  FaUserTie,
  FaFlag,
  FaEdit,
  FaCheck,
  FaLandmark,
  FaHandshake
} from "react-icons/fa";
import { GiIndiaGate } from "react-icons/gi";
import owner from "../../assets/profile/owner.jpg";
import { toast } from 'react-toastify';

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    education: 'Sahitya Ratna (B.A.), Allahabad',
    residence: 'Prayagraj, Uttar Pradesh',
    languages: 'Hindi, English'
  });

  const toggleEdit = () => {
    setIsEditing(!isEditing);
    if(!isEditing) toast.info('संपादन मोड सक्रिय ');
  };

  const handleSave = () => {
    setIsEditing(false);
    
    toast.success('परिवर्तन सहेजे गए!')
  };

  const handleChange = (e) => {
    setProfileData({...profileData, [e.target.name]: e.target.value});
  };

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8 bg-white dark:bg-gray-900 text-gray-800 dark:text-white rounded-2xl shadow-2xl mt-6 space-y-10 relative overflow-hidden">

      {/* सोशल मीडिया लिंक्स */}
      <div className="flex justify-center md:justify-start gap-6 text-xl">
        <a href="https://twitter.com/kpmaurya1" target="_blank" rel="noreferrer" className="p-3 bg-blue-400 text-white rounded-full hover:scale-110 transition-transform">
          <FaTwitter className="w-5 h-5" />
        </a>
        <a href="https://www.facebook.com/kpmaurya1bjp" target="_blank" rel="noreferrer" className="p-3 bg-blue-600 text-white rounded-full hover:scale-110 transition-transform">
          <FaFacebookF className="w-5 h-5" />
        </a>
        <a href="https://in.linkedin.com/in/keshav-prasad-maurya-73236344" target="_blank" rel="noreferrer" className="p-3 bg-blue-700 text-white rounded-full hover:scale-110 transition-transform">
          <FaLinkedinIn className="w-5 h-5" />
        </a>
        <a href="https://keshavprasadmaurya.com" target="_blank" rel="noreferrer" className="p-3 bg-green-500 text-white rounded-full hover:scale-110 transition-transform">
          <FaGlobe className="w-5 h-5" />
        </a>
      </div>

      {/* प्रोफाइल हेडर */}
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src={owner}
          alt="Keshav Prasad Maurya"
          className="w-32 h-32 rounded-full border-4 border-green-500 shadow-xl"
        />
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold text-green-600">केशव प्रसाद मौर्य</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">उत्तर प्रदेश के उप मुख्यमंत्री</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
            <FaLandmark className="text-blue-500" />
            सिराथू, कौशाम्बी, उत्तर प्रदेश
          </p>
        </div>
      </div>

      {/* संपादन बटन */}
      <div className="absolute top-4 right-4">
        <button 
          onClick={isEditing ? handleSave : toggleEdit}
          className={`p-3 text-white rounded-full ${isEditing ? 'bg-green-500' : 'bg-blue-500'} hover:scale-110 transition-transform`}
        >
          {isEditing ? <FaCheck size={20} /> : <FaEdit size={20} />}
        </button>
      </div>

      {/* प्रोफाइल विवरण */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* बायो डेटा */}
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-green-600">
            <FaUserTie />
            प्रोफाइल अवलोकन
          </h2>
          <div className="space-y-4">
            <DetailItem icon={FaBirthdayCake} title="जन्म तिथि" value="7 मई 1969 (आयु 55)" />
            <EditableItem
              icon={FaBook}
              title="शिक्षा"
              name="education"
              value={profileData.education}
              isEditing={isEditing}
              onChange={handleChange}
            />
            <DetailItem icon={FaUserTie} title="पेशा" value="व्यवसायी, राजनीतिज्ञ" />
            <DetailItem icon={FaFlag} title="पार्टी" value="भारतीय जनता पार्टी (BJP)" />
          </div>
        </div>

        {/* व्यक्तिगत जानकारी */}
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-blue-600">
            <GiIndiaGate />
            व्यक्तिगत जानकारी
          </h2>
          <div className="space-y-4">
            <EditableItem
              title="निवास स्थान"
              name="residence"
              value={profileData.residence}
              isEditing={isEditing}
              onChange={handleChange}
            />
            <EditableItem
              title="भाषाएं"
              name="languages"
              value={profileData.languages}
              isEditing={isEditing}
              onChange={handleChange}
            />
            <DetailItem title="धर्म" value="हिन्दू" />
          </div>
        </div>
      </div>

      {/* राजनीतिक इतिहास */}
      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-purple-600">
          <FaHandshake />
          राजनीतिक यात्रा
        </h2>
        <div className="space-y-6">
          <TimelineItem year="2012" title="विधायक चुने गए" description="सिराथू निर्वाचन क्षेत्र से" />
          <TimelineItem year="2014" title="सांसद चुने गए" description="16वीं लोकसभा (फूलपुर)" />
          <TimelineItem year="2016" title="BJP प्रदेश अध्यक्ष" description="उत्तर प्रदेश" />
          <TimelineItem year="2017" title="उप मुख्यमंत्री" description="उत्तर प्रदेश सरकार" />
          <TimelineItem year="2022" title="पुनः नियुक्त" description="उप मुख्यमंत्री पद" />
        </div>
      </div>
    </div>
  );
}

// कॉम्पोनेंट्स
function DetailItem({ icon: Icon, title, value }) {
  return (
    <div className="flex items-center gap-4 p-3 bg-white dark:bg-gray-700 rounded-lg">
      {Icon && <Icon className="text-green-500 w-6 h-6" />}
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-300">{title}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );
}

function EditableItem({ icon: Icon, title, name, value, isEditing, onChange }) {
  return (
    <div className="flex items-center gap-4 p-3 bg-white dark:bg-gray-700 rounded-lg">
      {Icon && <Icon className="text-blue-500 w-6 h-6" />}
      <div className="flex-1">
        <p className="text-sm text-gray-500 dark:text-gray-300">{title}</p>
        {isEditing ? (
          <input
            type="text"
            name={name}
            value={value}
            onChange={onChange}
            className="w-full p-1 border-b-2 border-green-500 bg-transparent focus:outline-none"
          />
        ) : (
          <p className="font-medium">{value}</p>
        )}
      </div>
    </div>
  );
}

function TimelineItem({ year, title, description }) {
  return (
    <div className="flex gap-4 relative pl-8 before:absolute before:left-0 before:h-full before:w-1 before:bg-purple-200 dark:before:bg-purple-800">
      <div className="absolute left-0 top-2 w-4 h-4 bg-purple-500 rounded-full"></div>
      <div>
        <p className="text-lg font-bold text-purple-600">{year}</p>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
}