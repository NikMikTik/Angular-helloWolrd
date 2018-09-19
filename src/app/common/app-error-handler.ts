import { ErrorHandler } from "@angular/core";

export class AppErrorhandler implements ErrorHandler{
    handleError(error){
if(error.status === 401)
        alert('Unexpected Error occured:~~ '+error);
        else{
            alert('Unexpected Error occured:~~ '+error);
            
        }

        
    }
}