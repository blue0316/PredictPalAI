// components
import {toast} from 'react-toastify';

// hooks
import {useState} from 'react';

const useFileReader = () => {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);

    // define a function that handles the file upload event
    const handleFile = (e) => {
        // get the file object from the event
        const file = e.target.files[0];
        // check if a file was selected; if not, exit the function
        if (!file) return;
        // check if the file type is supported (JPEG, PNG, or WEBP); if not, show an error message and exit the function
        if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/webp') {
            toast.error('File type not supported.');
            return;
        }

        // create a new FileReader object
        const reader = new FileReader();
        // read the file as a data URL
        reader.readAsDataURL(file);
        // set up an error handler for the reader
        reader.onerror = () => {
            toast.error('Something went wrong. Please try again.');
        }
        // set up a loading indicator while the file is being loaded
        reader.onloadstart = () => setLoading(true);
        // when the file is finished loading, set the file state and turn off the loading indicator
        reader.onloadend = () => {
            setFile(reader.result);
            setLoading(false);
        };
    }

    return {file, setFile, handleFile, loading};
}

export default useFileReader