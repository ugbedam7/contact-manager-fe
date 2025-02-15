import { useRef } from "react";
import { MdEdit } from "react-icons/md";
import { BASE_URL } from "../../App";
import { toast } from "react-toastify";
import { Avatar } from "@/components/ui/avatar";

const ContactImage = ({
  contact,
  selectedFile,
  setSelectedFile,
  contactImg,
  setContactImg
}) => {
  const contactImgRef = useRef(null);

  const handleImgChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const allowedTypes = ["image/png", "image/jpeg", "image/jpg", "image/webp"];
    if (!allowedTypes.includes(file.type)) {
      toast.error("Image format not allowed.");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      toast.error("Image size too large");
      return;
    }

    // Load the selected file and set its base64-encoded
    // string in state
    const reader = new FileReader();
    reader.onload = () => {
      setContactImg(reader.result);
    };
    reader.readAsDataURL(file);

    setSelectedFile(file);
  };

  return (
    <div className="position-relative p-1 contact-image-par">
      <Avatar src={contactImg || contact.imgUrl} />
      <input
        type="file"
        hidden
        name="image"
        accept="image/*"
        ref={contactImgRef}
        onChange={handleImgChange}
      />

      <div className="contact-image bg-secondary rounded-circle">
        <MdEdit
          cursor={"pointer"}
          size={20}
          onClick={() => contactImgRef.current.click()}
        />
      </div>
    </div>
  );
};

export default ContactImage;
