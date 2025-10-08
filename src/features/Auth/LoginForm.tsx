import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useUserStore } from '../../store/userStore';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';

const loginSchema = z.object({
    email: z.string().email('Invalid email format'),
    password: z.string().min(6, 'The password must be at least 6 characters long.'),
});

type LoginFormData = z.infer<typeof loginSchema>;

export const LoginForm = () => {
    const { register, handleSubmit, formState: { errors }} = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
    });
    const loginAction = useUserStore((state) => state.login);
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
        try{
            
        } catch(error) {
            console.error('Login Error', error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="email" {...register('email')} placeholder="Email"/>
            {errors.email && <p>{errors.email.message}</p>}

            <input type="password" {...register('password')} placeholder="Password"/>
            {errors.password && <p>{errors.password.message}</p>}

            <button type="submit">LogIn</button>
        </form>
    );
};