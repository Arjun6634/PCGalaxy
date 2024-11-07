package com.jeevi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.bind.support.SessionStatus;

import com.jeevi.Repository.UserRepository;
import com.jeevi.entity.Users;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@Controller
@SessionAttributes("users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    // Display Registration Form
    @GetMapping("/register")
    public String getRegister(Model model) {
        Users user = new Users();
        model.addAttribute("users", user);
        return "Registration";  // Return the registration form
    }

    // Handle Registration Form Submission
    @PostMapping("/register")  // Make sure this matches the form action
    public String saveRegister(@Valid @ModelAttribute Users user, BindingResult result, Model model) {
        if (result.hasErrors()) {
            System.out.println("Validation errors: " + result.getAllErrors());
            return "Registration";  // Stay on registration page if validation fails
        }

        // Save user to the database
        userRepository.save(user);
        model.addAttribute("msg", "User saved successfully");

        // Log to ensure successful registration
        System.out.println("User registered successfully. Redirecting to login...");

        // Redirect to the login page
        return "redirect:/login";  // Ensure this is redirecting properly
    }

    // Display Login Form
    @GetMapping("/login")
    public String showLoginForm(Model model) {
        model.addAttribute("users", new Users());
        return "login";  // Return the login page (login.html)
    }

    // Process Login Form Submission
    @PostMapping("/login")
    public String processLogin(@ModelAttribute Users user, Model model) {
        // Log to check if the form submission is reaching here
        System.out.println("Entered username: " + user.getName());
        System.out.println("Entered password: " + user.getPwd());

        // Find the user by name in the database
        Users dbUser = userRepository.findByName(user.getName());

        // Check if the user exists
        if (dbUser == null) {
            System.out.println("User not found");
            model.addAttribute("error", "Invalid username or password");
            return "login";  // Return to login page if user not found
        }

        // Check if the password matches
        if (!user.getPwd().equals(dbUser.getPwd())) {
            System.out.println("Password mismatch");
            model.addAttribute("error", "Invalid username or password");
            return "login";  // Return to login page if password doesn't match
        }

        // If login is successful, log success and redirect to Nav page
        System.out.println("Login successful. Redirecting to Nav page.");
        return "redirect:/Nav";  // Redirect to /nav URL on successful login
    }
    @GetMapping("/logout")
    public String logout(Model model) {
        // Add any necessary logout logic, e.g., invalidate session, etc.
        model.addAttribute("message", "Successfully logged out");
        return "logout";  // Redirect or return the logout page
    }
    @PostMapping("/logout")
    public String logout(SessionStatus sessionStatus, Model model) {
        // Retrieve the user from session (assuming user ID is stored)
        Users user = (Users) model.getAttribute("users");

        if (user != null) {
            // Delete the user record from the database
            userRepository.deleteById(user.getId());

            // Clear session and invalidate it
            sessionStatus.setComplete();
            model.addAttribute("message", "Successfully logged out .");
        } else {
            model.addAttribute("message", "No user found in session.");
        }

        return "logout"; // Redirect or show the logout page with the success message
    }

    }


