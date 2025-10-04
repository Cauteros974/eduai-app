import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { email, z } from 'zod';
import { useUserStore } from '../../store/userStore';
import { loginUser } from '../../services/authService';

const loginSchema = z.object({
    email: z.string().email('Invalid email format'),
    password: z.string().min(6, 'The password must be at least 6 characters long.'),
});

type LoginFormData = z.infer<typeof loginSchema>;

export const LoginForm = () => {
    const { register, handleSubmit, formState: { errors }} = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
    });
    const login = useUserStore((state) => state.login);

    const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
        try{
            const response = await loginUser(data);
            login(response.user, response.token);
        } catch(error) {
            console.error('Login Error', error);
        }
    };
}
