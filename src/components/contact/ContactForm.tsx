import { useContactForm } from "../../hooks/useContactForm";
import ProjectTypeSelector from "./ContactOptions";
import { FormFields } from "./FormFields";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormComponent = () => {
  const {
    formData,
    selectedChips,
    isSubmitting,
    handleChange,
    setSelectedChips,
    handleSubmit,
    fields,
    sendSubmitButton,
    sendingMessage,
  } = useContactForm();

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <ToastContainer theme="dark" />
      <input type="hidden" name="projectType" value={selectedChips.join(", ")} />
      <ProjectTypeSelector selectedChips={selectedChips} setSelectedChips={setSelectedChips} />

      <FormFields fields={fields} formData={formData} handleChange={handleChange} />

      <button
        type="submit"
        className={`bg-secondary text-white font-bold py-3 rounded-lg transition ${isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-hover"
          }`}
        disabled={isSubmitting}
      >
        {isSubmitting ? sendingMessage : sendSubmitButton}
      </button>
    </form>
  );
};

export default FormComponent;
