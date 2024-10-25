# IP Checker Tool

## Description

**IP Checker Tool** is a web-based application that allows users to check information about IP addresses across multiple databases, including **AbuseIPDB**, **IPinfo**, and IP blacklists. The tool is built using **Node.js**, **Express**, and **Axios**, with a modern, responsive user interface created with **HTML** and **CSS**.

## Features

- **Blacklist Check**: Checks if an IP address is listed in various IP blacklists.
- **IPinfo Lookup**: Retrieves geolocation and network information for an IP address.
- **AbuseIPDB Integration**: Identifies malicious activity associated with IP addresses.
- **User-Friendly Results**: Displays results in a plain text format for easy readability.
- **Responsive Design**: Designed with a clean, modern user interface that works well on both desktop and mobile devices.

## Requirements

- **Node.js** (v14.0 or higher)
- **npm** (v6.0 or higher)

## Installation

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/your-username/ip-checker-tool.git
    ```

2. Navigate to the project directory:

    ```bash
    cd ip-checker-tool
    ```

3. Install the necessary dependencies:

    ```bash
    npm install
    ```

4. Set up your environment variables:
   
   - Create a `.env` file in the root of the project with the following content:
   
     ```
     BLACKLIST_API_KEY=your_balcklist_api_key_here
     ABUSEIPDB_API_KEY=your_abuseipdb_api_key_here
     ```

   - Replace `your_abuseipdb_api_key_here` with your actual API key from AbuseIPDB. You can obtain an API key by signing up at [AbuseIPDB](https://www.abuseipdb.com).

## Usage

1. Start the server:

    ```bash
    npm start
    ```

2. Open your web browser and go to:

    ```
    http://localhost:3000
    ```

3. In the search box, enter an IP address, then click the button to retrieve information.

## API Integrations

The tool integrates with several external APIs to gather information about IP addresses:

### 1. [IPinfo API](https://ipinfo.io)
   - **Purpose**: Retrieves geolocation, ASN (Autonomous System Number), and other network information about the IP address.
   - **No API key required**.

### 2. [AbuseIPDB API](https://www.abuseipdb.com)
   - **Purpose**: Checks whether an IP address has been reported for malicious activity (e.g., spamming, hacking attempts).
   - **API key required**: You need to set this in the `.env` file as shown above.

### 3. IP Blacklists
   - **Purpose**: Verifies if an IP address is listed on any known public IP blacklists, commonly used to track malicious activities.

## Project Structure

```bash
ip-checker-tool/
├── backend/
│   ├── app.js        # Main Express server configuration and route setup
│   ├── routes/
│   │   ├── api.js    # API routes handling IP lookups
│   │   ├── auth.js   # Authentication routes (if applicable)
│   │   ├── data.js   # Additional routes for data processing
├── frontend/
│   ├── css/
│   │   └── styles.css  # Custom styles for the user interface
│   ├── index.html      # Main HTML page for the frontend
├── .env               # Environment file to store sensitive API keys
├── package.json       # Project dependencies and metadata
├── README.md          # Project documentation

```

## Customization
You can customize this project to fit your specific needs:

  - Frontend: To modify the user interface, edit the HTML and CSS files in the `frontend/` directory.

  - APIs: If you wish to add or modify API integrations, adjust the routes in the `backend/routes/` folder. For example, you can add more API endpoints in `api.js` to handle different types of data retrieval.
