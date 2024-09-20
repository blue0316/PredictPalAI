import {
  auth,
  googleProvider,
  sendPasswordResetEmail,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
  deleteUser,
} from "./firebase";

export { auth };

export const signInWithGoogle = () => {
  return signInWithPopup(auth, googleProvider);
};

export const signInWithEmail = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const onAuthStateChanged = (callback) => {
  return auth.onAuthStateChanged(callback);
};

export const registerWithEmail = async (email, password, displayName) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    await updateProfile(user, { displayName });

    await user.reload();

    return userCredential;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};

export const resetPasswordWithEmail = (email) => {
  return sendPasswordResetEmail(auth, email);
};
export const deleteUserWithEmail = (user) => {
  return deleteUser(user);
};

export const logout = () => {
  return signOut(auth);
};
