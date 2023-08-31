export function showMessage(title, message, icon) {
    Swal.fire(title, message, icon);
  }

export async function AuthMessage(icon,title) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });
  
    Toast.fire({
      icon: icon,
      title: title,
    });

    await new Promise(resolve => setTimeout(resolve, 2000));
  }
  

  export function ConfirmMessage(title,message,callback){
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: title,
        text: message,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, Registrar otro!',
        cancelButtonText: 'No, Salir!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
        //   swalWithBootstrapButtons.fire(
        //     'Deleted!',
        //     'Your file has been deleted.',
        //     'success'
        //   )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
        //   swalWithBootstrapButtons.fire(
        //     'Cancelled',
        //     'Your imaginary file is safe :)',
        //     'error'
        //   )
        callback();
        }
      })
  }


  export function ConfirmButton(title,message,callback,booleano,subtitle,subMessage){
    Swal.fire({
        title: title,
        text: message,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed && booleano) {
          Swal.fire(
            subtitle,
            subMessage,
            'success'
          )
        }
      })
  }


  export function Message(title,message,icon){
    Swal.fire(
      title,
      message,
      icon
    )
  }