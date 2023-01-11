import Swal from 'sweetalert2'

export const success = () => {
    Swal.fire({
        title: 'Registro exitoso',
        text: 'Redireccionando a la lista de usuarios',
        icon: 'success',
        showConfirmButton: false,
        timer: 2000,
    })}

export const Error = () => {
    Swal.fire({
        title: 'Error al registrar',
        text: 'Hubo un problema al registrar el usuario',
        icon: 'error',
        timer: 2000,
    })}