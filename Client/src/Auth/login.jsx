import {Card, Flex, Typography, Form, Input, Alert, Spin, Button} from 'antd';
//import { Link } from 'react-router-dom';
import { AiOutlineSwapRight } from "react-icons/ai"
import useLogin from '../hooks/useLogin';
 
const Login = () => {
    const{loading, error, loginUser} = useLogin();
    const handlerLogin = async (values) => {
        await loginUser(values);   
    };
  return (
    <Card className='form-container'>
        <Flex gap={"large"} >   
            <Flex vertical flex={1} >
            <img src="https://www.grupobios.co/Portals/0/logo2.png?ver=2018-11-30-163522-200" alt="Logo Bios" className='headerDiv' />
            <Typography.Title level={3} strong className='title' type='secondary'>
            Enturnamiento Bios!
                </Typography.Title>
                {/* <Typography.Text  strong className='slogan' type='secondary'  //className='slogan'
                >
                    Enturnamiento Bios
                </Typography.Text> */}

                <Form layout='vertical' onFinish={handlerLogin} autoComplete='off'>
                    <Form.Item
                        label='Email'
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Por favor ingrese su email!'
                            },
                            {
                                type: 'email',
                                message: 'Por favor ingrese un email válido!'
                            }
                        ]}
                    >
                        <Input size='large' placeholder='Ingrese su email' />
                    </Form.Item>

                    <Form.Item
                        label='Password'
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Por favor ingrese su contraseña!'
                            },
                        ]}
                    >
                        <Input.Password size='large' placeholder='Ingrese su contraseña' />
                    </Form.Item>

                    { error && (<Alert 
                            description ={error} 
                            type='error' 
                            showIcon 
                            closable 
                            className='alert' 
                            />
                         )}

                    <Form.Item>
                       
                       <Button 
                        type={`${loading ? '' : ''}`}
                        htmlType ='submit'
                        size='large'
                        className='btn'
                        >
                            {loading ?<Spin/> :'Ingresar'}
                            <AiOutlineSwapRight className="icon"/>

                        </Button>
                      
                       
                    </Form.Item>

                </Form>
            </Flex>
            <Flex flex={1} className="container" >
            <img src= "https://www.grupobios.co/Portals/0/EasyDNNRotator/1530/kugg5vhq.jpg" alt="Paisaje Bios"  className='auth-img'/>
            <Typography.Title level={3} strong className='title2' >
                    Bienvenidos!
                </Typography.Title>
            </Flex>
        </Flex>
    </Card>
  )
}

export default Login