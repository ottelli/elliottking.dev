import ContactForm from "./ContactForm"

const ContactModal = ({
  visible,
  closeModal,
}: {
  visible: boolean
  closeModal: () => void
}) => {
  if (!visible) return <></>

  return (
    <div
      className={`fixed top-0 left-0 z-20 flex h-screen w-screen  items-center justify-center overscroll-contain transition-colors delay-500 ${
        visible ? "bg-[#1a1a1a66]" : "bg-[#1a1a1a01]"
      }`}
      onClick={() => closeModal()}
    >
      <ContactForm />
    </div>
  )
}

export default ContactModal
