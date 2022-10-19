package net.codinghermit.api.exception;

public class StaffIdAlreadyExistException extends RuntimeException{
    public StaffIdAlreadyExistException() {
        super("Staff Id Already Exists");
    }
}
