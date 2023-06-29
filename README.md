<br/>
<p align="center">
    <a href="https://github.com/reybot-ver10/Reybot">
        <img src="https://i.postimg.cc/wMZwrgt4/Untitled1-20230304111800.png" alt="Rey Bot">
    </a>

<h3 align="center">REY BOT</h3>

<p align="center">
    Introducing Rey Bot, an advanced AI chatbot developed by the innovative mind of John Ré Poras. Rey Bot stands as a testament to the seamless fusion of artificial intelligence and human-like conversational abilities. With its exceptional intelligence and natural language processing capabilities, Rey Bot provides users with an unparalleled interactive experience.
    <br/>
    <br/>
    <a href="https://github.com/reybot-ver10/Reybot/pulls">Report Bug</a>
    ·
    <a href="https://github.com/reybot-ver10/Reybot/pulls">Request Feature</a>
    </p>
</p>

<p align="center">
	<img alt="size" src="https://img.shields.io/static/v1?label=Size&message=3.1 mb&color=blue">
	<img alt="code-version" src="https://img.shields.io/static/v1?label=Code Version &message=V1.4.39&color=Orange">
	<a href="https://github.com/reybot-ver10/Reybot/commits"><img alt="commits" src="https://img.shields.io/static/v1?label=Commit &message=0/month&color=blue"></a>
    
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
    <summary>TABLE OF CONTENTS</summary>
    <ol>
        <li><a href="#INTRODUCE">INTRODUCE</a></li>
        <li><a href="#INSTALLATION">INSTALLATION</a></li>
        <li><a href="#CONTRIBUTING">CONTRIBUTING</a></li>
        <li><a href="#LICENSE">LICENSE</a></li>
        <li><a href="#CONTACT">CONTACT</a></li>
    </ol>
</details>

<!-- ABOUT THE PROJECT -->
## Introduce
<p><strong>REY BOT </strong></strong></p>
<br/>
<p>
<strong>REY BOT</strong> is designed to engage in a wide range of conversations, catering to diverse interests and topics. Whether you seek assistance with mundane tasks, want to discuss current affairs, explore the realms of science and technology, or simply engage in lighthearted banter, Rey Bot is there to meet your conversational needs..
</p>


<!-- INSTALLATION -->
## Installation

Following are the basic steps to be able to install and operate.

### Request

- The space of the device must be about 1-2gb free.
- Need some file editing software, recommended to use [notepad++](https://notepad-plus-plus.org/downloads/) or [sublime text 3](https://www.sublimetext.com/3)
- Need a brief understanding of node, javascript.
- A Facebook account used to make bots (It is recommended to use the abandoned or no longer used acc to avoid losing acc or locked acc).
- For:
    - Windows: Need to install windows-build-tools.
    - Linux: Need to install python3 or python2.
    - Android Use termux to operate bot.
### Setting

#### Windows

1. Download [Nodejs](https://nodejs.org/en/) or [git](https://git-scm.com/) then install
    1. If you are windows 7 or below and can't install nodejs, you can download the nodejs installation file [here(win 64bit)](https://nodejs.org/download/release/v13.14.0/node-v13.14.0-x64.msi) or [here(win 32bit)](https://nodejs.org/download/release/v13.14.0/node-v13.14.0-x86.msi)

2. Install windows-build-tools:
    1. Open powershell as adminstrator via startMenu
    2. Enter
     ```sh
     npm install windows-build-tools
     ```

3. Clone the bot's source code
    1. Right click on the folder where the source code needs to be installed and click on git bash
    2. enter
    ```sh
    git clone https://github.com/reybot-ver10/Reybot
    ```

4. Install the necessary packages
    1. Open cmd/terminal in bot folder, NOTE that folder must have package.json
    2. Enter
    ```sh
    npm install
    ```

5. Edit the config . file
    1. Open the config.json file via notepad++ or sublime text 3 installed above
    2. Customize mail, password, bot name, ...
    3. Backup and close

6. Get the appstate
    - You can use the c3c bot's fbstate, but need to rename it to appstate.json or change the name in the config.json section as in the steps above.
    1. Enter
    ```sh
    login node
    ```
    2. Enter the two-factor authentication code
    3. If on cmd/terminal shows ```Appstate has been recorded'``, it means your appstate has been saved, and if there is an error line, your appstate has not been saved, you need to check again. account information, and check if your account is not subject to a checkpoint.

7. Run bot and enjoy
    1. Enter
    ```sh
      npm start
      ```
    2. Wait for the source code to load the file and enjoy!

#### Android

1. Use google play and download termux

2. Wait for all packages and libs to be successfully installed to be used

3. Get the appstate
    - You can use c3c bot's fbstate, but need to rename it back to appstate.json or change the name in config.json
    1. Enter
    ```sh
    login node
    ```
    2. Enter the two-factor authentication code
    3. If on cmd/terminal shows ```Appstate has been recorded'``, it means your appstate has been saved, and if there is an error line, your appstate has not been saved, you need to check again. account information, and check if your account is not subject to a checkpoint.

4. About how to use, edit, operate
      1. To enable file manager you just need to enter termux
      ```sh
      manager
      ```
      2. To operate the bot you just need to type in termux
      ```sh
      cd ./Reybot && npm start
      ```


#### Linux

1. Install node and git by typing in terminal
    ```sh
    sudo apt-get install curl
    curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
    sudo apt-get install nodejs git sqlite3 -y
    sudo npm install -g npm
    ```

2. Clone the bot's source code by typing in terminal
    ```sh
    git clone https://github.com/reybot-ver10/Reybot
    ```

3. Install the necessary packages
    1. Open cmd/terminal in bot folder, NOTE that folder must have package.json
    2. Enter
    ```sh
    npm install
    ```

4. Edit the config file
    1. Open the config.json file through the installed notepad++ or sublime text 3
    2. Customize mail, password, bot name, ...
    3. Backup and close

5. Get the appstate
    - You can use the c3c bot's fbstate, but need to rename it to appstate.json or change the name in the config.json section as in the steps above.
    1. Enter
    ```sh
    login node
    ```
    2. Enter the two-factor authentication code
    3. If on cmd/terminal shows ```Appstate has been recorded'``, it means your appstate has been saved, and if there is an error line, your appstate has not been saved, you need to check again. account information, and check if your account is not subject to a checkpoint.

6. Run bot and enjoy
    1. Enter
    ```sh
      npm start
      ```
    2. Wait for the source code to load the file and enjoy!
    
<!-- CONTRIBUTING -->
## Contributing

Your contribution will make the project better and better, steps for you to contribute

1. Fork this project
2. Create a new branch containing your feature (`git checkout -b feature/AmazingFeature`)
3. Commit what you want to contribute (`git commit -m 'Add some AmazingFeature'`)
4. Push the branch containing your feature (`git push origin feature/AmazingFeature`)
5. Create a new pull request and your donation is ready to contribute!

<!-- LICENSE -->
## License

This project is licensed under the GNU General Public License v3.0 License - see the [LICENSE](LICENSE) file.

<!-- CONTACT -->
## Contact

JOHN RÉ - [Facebook](https://www.facebook.com/profile.php?id=100081837309327) - [GitHub](https://github.com/reybot-ver10/Reybot) - rej418416@gmail.com
