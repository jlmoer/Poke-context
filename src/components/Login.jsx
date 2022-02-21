import { useForm } from 'react-hook-form';

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <div>
            <h1>LOGIN</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("userName", { required: true, maxLength: 15 })} />
                <span>{errors.userName?.type === 'required' && "User Name is required"}</span>
                <input {...register("password", { required: true, minLength: 6 })} type="password" />
                <span>{errors.password?.type === 'required' && "Password is required"}</span>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Login;