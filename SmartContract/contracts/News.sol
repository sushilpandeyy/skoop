// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

contract News {
    // Struct to represent a reporter
    struct Reporter {
        string name;
        string email;
        string image;
        address[] followers;
    }
    
    // Struct to represent users
    struct User {
        string name;
        string img;
        address[] followingReporters;
    }
    
    // Struct to represent a piece of news
    struct Newsitem {
        string title;
        string description;
        string summary;
        string category;
        string imgUrl;
        string vidUrl;
        address reporterAddress;
    }
    
    // Mapping to check if an address is a reporter
    mapping(address => bool) public isReporter;
    
    // Mapping to store reporter details
    mapping(address => Reporter) public reporters;
    
    // Mapping to store which reporters a user is following
    mapping(address => mapping(address => bool)) public followingReporters;
    
    // Mapping to store user details
    mapping(address => User) public users;

    // Array to store all news
    Newsitem[] public newsList;

    // Function to check if an address is a reporter
    function isaReporter(address _address) external view returns (bool) {
        return isReporter[_address];
    }
    
    // Function to add a new reporter
    function addReporter(string memory _name, string memory _email, string memory _image) external {
        // Check if the reporter already exists
        require(!isReporter[msg.sender], "Reporter already exists");
        
        // Mark the address as a reporter
        isReporter[msg.sender] = true;
        
        // Create a new reporter and store it in the mapping
        reporters[msg.sender] = Reporter(_name, _email, _image, new address[](0));
    }

    function adduser(string memory _name,string memory _img) external {
        isReporter[msg.sender] = false;
        users[msg.sender] = User(_name,_img,new address[](0));
    }

    // Function to add news linked to a reporter
    function addNews(
        string memory _title,
        string memory _description,
        string memory _summary,
        string memory _category,
        string memory _imgUrl,
        string memory _vidUrl
    ) external {
        // Check if the sender is a registered reporter
        require(isReporter[msg.sender], "Reporter not registered");
        
        // Add news to the newsList
        newsList.push(Newsitem(_title, _description, _summary, _category, _imgUrl, _vidUrl, msg.sender));
    }
    
    // Function for users to follow a reporter
    function followReporter(address _reporterAddress) external {
        // Check if the reporter exists
        require(isReporter[_reporterAddress], "Reporter not registered");
        
        // Add the user to the reporter's followers list
        reporters[_reporterAddress].followers.push(msg.sender);
        
        // Add the reporter to the user's following list
        users[msg.sender].followingReporters.push(_reporterAddress);
        
        // Mark that the user follows the reporter
        followingReporters[msg.sender][_reporterAddress] = true;
    }

    function getfollowings(address _userAddress) external view returns(address[] memory)
    {
        return users[_userAddress].followingReporters;
    }
    
    // Function to get the list of users following a specific reporter
    function getFollowers(address _reporterAddress) external view returns (address[] memory) {
        return reporters[_reporterAddress].followers;
    }

    // Function to get the list of reporters
    function getReporters() external view returns (Reporter[] memory) {
        Reporter[] memory result = new Reporter[](newsList.length);
        
        for (uint256 i = 0; i < newsList.length; i++) {
            result[i] = reporters[newsList[i].reporterAddress];
        }
        
        return result;
    }
    
    // Function to get the list of latest news
    function getLatestNews()  external view returns  (Newsitem[] memory) {
        return newsList;
    }
    
    // Function to get information about a specific reporter
    function getReporterInfo(address _reporterAddress) external view returns (Reporter memory) {
        return reporters[_reporterAddress];
    }
}
