export const getHome = (req, res) => {
    res.json({ message: "Welcome to the Task Tracker API!" });
};

export const getAbout = (req, res) => {
    res.json({ 
        status: "success",
        info: "This is a simple Express server built with MVC pattern." 
    });
};

export const getContact = (req, res) => {
    res.json({ email: "support@tasktracker.com", phone: "123-456-7890" });
};

export const getGreeting = (req, res) => {
    const hours = new Date().getHours();
    const greeting = hours < 12 ? "Good Morning" : "Good Evening";
    res.json({ 
        greeting, 
        serverTime: new Date().toLocaleTimeString() 
    });
};

export const handlePostData = (req, res) => {
    const userData = req.body;
    
    if (!userData || Object.keys(userData).length === 0) {
        return res.status(400).json({ error: "No data provided" });
    }

    res.json({
        message: "Data received successfully!",
        receivedData: userData
    });
};