import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../../store/userStore';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';

const loginSchema = z.object({
  email: z.string().email('Invalid email format'),
  password: z.string().min(6, 'The password must be at least 6 characters long.'),
});

type LoginFormData = z.infer<typeof loginSchema>;

export const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });
  const loginAction = useUserStore((state) => state.login);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    try {
      console.log('Sending data:', data);
      const mockResponse = {
        user: { id: '1', email: data.email, name: 'Student' },
        token: 'fake-jwt-token',
      };
      loginAction(mockResponse.user, mockResponse.token);
      navigate('/');
    } catch (error) {
      console.error('Login Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: '350px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <h2 style={{ textAlign: 'center' }}>LogIn</h2>
      <div>
        <Input type="email" {...register('email')} placeholder="Email" />
        {errors.email && <p style={{ color: 'red', margin: '5px 0 0' }}>{errors.email.message}</p>}
      </div>
      <div>
        <Input type="password" {...register('password')} placeholder="Пароль" />
        {errors.password && <p style={{ color: 'red', margin: '5px 0 0' }}>{errors.password.message}</p>}
      </div>
      <Button type="submit">LogOut</Button>
    </form>
  );
};