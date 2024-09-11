// components
import AuthLayout from '@components/AuthLayout';
import LoginForm from '@widgets/LoginForm';

const Login = () => {
    return (
        <AuthLayout title="Login">
            <LoginForm/>
        </AuthLayout>
    );
}

export default Login