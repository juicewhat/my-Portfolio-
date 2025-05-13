import javax.swing.*;
import java.awt.*;

public class AirlineReservationApp {
    private static JFrame frame;
    private static JPanel panel;
    private static CardLayout cardLayout;

    public static void main(String[] args) {
      
        frame = new JFrame("Airline Reservation System");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(700, 500);

        cardLayout = new CardLayout();
        panel = new JPanel(cardLayout);

        
        Admin admin = new Admin();
        User user = new User();

        // Add panels for login, registration, user reservations, and admin functionalities
        panel.add(user.createLoginPanel(cardLayout, panel), "Login");
        panel.add(user.createReservationPanel(cardLayout, panel), "Reservations");
        panel.add(admin.createAdminPanel(cardLayout, panel), "Admin");

        // Set the default view to Login screen
        cardLayout.show(panel, "Login");

        frame.add(panel);
        frame.setVisible(true);
    }
}
