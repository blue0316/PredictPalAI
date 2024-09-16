import React, { useRef } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import styles from "./styles.module.scss";
import Spring from "@components/Spring";
import LazyImage from "@components/LazyImage";
import Submenu from "@ui/Submenu";
import useFileReader from "@hooks/useFileReader";
import useSubmenu from "@hooks/useSubmenu";
import user from "@assets/user.webp";
import placeholder from "@assets/placeholder.webp";

const ProfileAvatar = () => {
  const { anchorEl, open, handleClick, handleClose } = useSubmenu();
  const { file, setFile, handleFile } = useFileReader();
  const inputRef = useRef(null);

  const triggerInput = () => inputRef.current?.click();

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const storage = getStorage();
    const storageRef = ref(storage, `avatars/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Progress function
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      (error) => {
        // Handle unsuccessful uploads
        console.error("Upload failed:", error);
      },
      () => {
        // Handle successful uploads on complete
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFile(downloadURL);
          console.log("File available at", downloadURL);
        });
      }
    );
  };

  const submenuActions = [
    {
      label: "Upload",
      icon: "upload",
      onClick: triggerInput,
    },
    {
      label: "Remove",
      icon: "trash",
      onClick: () => setFile(placeholder),
    },
  ];

  return (
    <Spring className={`${styles.card} card card-padded`}>
      <h3 className={styles.title}>My Profile</h3>
      <div className={`${styles.container} d-flex align-items-center`}>
        <div className={styles.wrapper}>
          <input type="file" onChange={handleUpload} ref={inputRef} hidden />
          <div>
            <LazyImage
              className={styles.img}
              src={file ? file : user}
              alt="Lottie Poole"
            />
          </div>
          <button
            className={styles.button}
            onClick={handleClick}
            aria-label="Open menu"
          >
            <i className="icon-camera" />
          </button>
          <Submenu
            open={open}
            onClose={handleClose}
            anchorEl={anchorEl}
            actions={submenuActions}
          />
        </div>
        <div className="d-flex flex-column g-4">
          <h3 className="text-overflow">Lottie Poole</h3>
          <span className="text-overflow">Munich, Germany</span>
        </div>
      </div>
    </Spring>
  );
};

export default ProfileAvatar;
