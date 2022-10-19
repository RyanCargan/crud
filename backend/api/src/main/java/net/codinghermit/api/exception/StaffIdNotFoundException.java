package net.codinghermit.api.exception;

public class StaffIdNotFoundException extends RuntimeException{
    public StaffIdNotFoundException()
    {
        super("Staff Id Not Found");
    }
}
