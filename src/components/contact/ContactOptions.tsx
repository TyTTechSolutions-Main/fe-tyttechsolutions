import { CONTACT } from '../../mocks';

const { typeProject } = CONTACT;

const ProjectTypeSelector = ({ selectedChips, setSelectedChips }: { selectedChips: string[], setSelectedChips: React.Dispatch<React.SetStateAction<string[]>> }) => {
  const toggleChip = (option: string) => {
    setSelectedChips((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
    );
  };

  return (
    <div className='flex flex-wrap gap-3'>
      {typeProject.map((option) => (
        <button
          key={option}
          type='button'
          className={`border border-secondary px-4 py-2 rounded-full transition ${selectedChips.includes(option) ? 'bg-secondary text-white' : 'hover:bg-secondary hover:text-white'
            }`}
          onClick={() => toggleChip(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default ProjectTypeSelector;
