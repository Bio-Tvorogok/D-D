import * as React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import ErrorMsg from './ErrorMsg';
import { object, string } from 'yup';
import { sendRegisterData, sendLoginData } from './AuthRest';
import { RegisterData } from './AuthType';
import { Navigate } from 'react-router-dom';

const resolver = object({
    username: string().required(),
    full_name: string(),
    email: string().email().required(),
    password: string().required(),
});
function Auth() {
    const [isAuth, setAuth] = React.useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterData>({
        resolver: yupResolver(resolver),
    });
    const onSubmit = handleSubmit((data) => {
        sendRegisterData(data)
            .then((responseRegister) => {
                console.log(responseRegister);
                sendLoginData({
                    username: data.username,
                    password: data.password,
                }).then((responseLogin) => {
                    console.log(responseLogin);
                    const token = responseLogin.data.access_token as string;
                    sessionStorage.setItem('token', token);
                    setAuth(true);
                    // handleLogin(true);
                });
            })
            .catch((error) => {
                console.log(error);
            });
    });

    if (isAuth) {
        return (
            <div>
                <Navigate replace to="/"></Navigate>
            </div>
        );
    }

    return (
        <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
            {isAuth && (
                <div>
                    <Navigate replace to="/"></Navigate>
                </div>
            )}
            <div className="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0">
                <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
                        Sign in to your account
                    </h1>
                    <form
                        onSubmit={onSubmit}
                        className="space-y-4 md:space-y-6"
                        action="#">
                        <div>
                            <label
                                htmlFor="username"
                                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                                User name
                            </label>
                            <input
                                {...register('username')}
                                type="text"
                                name="username"
                                id="username"
                                placeholder="Victor"
                                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                            />
                            {errors?.username && (
                                <ErrorMsg
                                    msg={errors.username.message}></ErrorMsg>
                            )}
                        </div>
                        <div>
                            <label
                                htmlFor="full_name"
                                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                                Full name
                            </label>
                            <input
                                {...register('full_name')}
                                type="text"
                                name="full_name"
                                id="full_name"
                                placeholder="Chebotarev"
                                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                            />
                            {errors?.full_name && (
                                <ErrorMsg
                                    msg={errors.full_name.message}></ErrorMsg>
                            )}
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                                Your email
                            </label>
                            <input
                                {...register('email')}
                                type="email"
                                name="email"
                                id="email"
                                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                                placeholder="name@company.com"
                            />
                            {errors?.email && (
                                <ErrorMsg msg={errors.email.message}></ErrorMsg>
                            )}
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                                Password
                            </label>
                            <input
                                {...register('password')}
                                type="password"
                                name="password"
                                id="password"
                                placeholder="••••••••"
                                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                            />
                            {errors?.password && (
                                <ErrorMsg
                                    msg={errors.password.message}></ErrorMsg>
                            )}
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-start">
                                <div className="flex h-5 items-center">
                                    <input
                                        id="remember"
                                        aria-describedby="remember"
                                        type="checkbox"
                                        className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label
                                        htmlFor="remember"
                                        className="text-gray-500 dark:text-gray-300">
                                        Remember me
                                    </label>
                                </div>
                            </div>
                            <a
                                href="#"
                                className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                                Forgot password?
                            </a>
                        </div>
                        <button
                            type="submit"
                            className="w-full rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                            Sign in
                        </button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Don’t have an account yet?{' '}
                            <a
                                href="#"
                                className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                Sign up
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Auth;
