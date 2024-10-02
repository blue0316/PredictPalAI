// components
import AuthLayout from '@components/AuthLayout';
import SignUpForm from '@widgets/SignUpForm';

const SignUp = () => {
    return (
        <AuthLayout title="Sign Up">
            <SignUpForm />
        </AuthLayout>
    );
}

export default SignUp