<div id="top"></div>

<!-- PROJECT SHIELDS -->
[![Contributors][Contributors-shield]][Contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Downloads][download-shield]][download-url]
[![LastCommit][lastcommit-shield]][lastcommit-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT HEADER -->
<br />
<div align="center">
  <h3 align="center">Laravel 9 - OFTC Base Template</h3>

  <p align="center">
    An awesome laravel starter template to jumpstart your project!
    <br />
    <a href="https://github.com/OneForTheCode/Laravel-9-OFTC-Base">
      <img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" alt="Laravel Logo" width="400">
    </a>
    <br />
    <a href="https://github.com/OneForTheCode/Laravel-9-OFTC-Base/issues">Report Bug</a>
    ·
    <a href="https://github.com/OneForTheCode/Laravel-9-OFTC-Base/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#1-about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#used-packages">Used Packages</a></li>
      </ul>
    </li>
    <li>
      <a href="#2-getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#3-usage">Usage</a></li>
    <li><a href="#4-contributing">Contributing</a></li>
    <li><a href="#5-license">License</a></li>
    <li><a href="#6-contact">Contact</a></li>
    <li><a href="#7-maintainers">Maintainers</a></li>
    <li><a href="#8-acknowledgments">Acknowledgments</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## 1. About The Project

Laravel 9 - One For The Code Base is a laravel 9 basic install with extra components, tools, traits, livewire components and many other developer or production extra's

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

<p align="center">
  <a href="https://laravel.com"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" alt="Laravel Logo" width="400"></a>
  <a href="https://laravel-livewire.com"><img src="https://laravel-livewire.com/img/logo.svg" alt="Livewire Logo" width="400"></a>
</p>
<p align="center">
  <a href="https://jetstream.laravel.com"><img src="https://raw.githubusercontent.com/laravel/jetstream/2.x/art/logo.svg" alt="Jetstream Logo" width="400"></a>
  <a href="https://tailwindcss.com"><img src="https://raw.githubusercontent.com/tailwindlabs/tailwindcss/master/.github/logo-light.svg" alt="Tailwindcss Logo" width="400"></a>
</p>

<p align="right">(<a href="#top">back to top</a>)</p>

### Used Packages

To see all the details of the used and installed composer/npm packages and their documentation please read the [`PACKAGES.md`](https://github.com/OneForTheCode/Laravel-9-OFTC-Base/blob/main/PACKAGES.md) file for more information.

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- GETTING STARTED -->
## 2. Getting Started

This is an example of how you may be setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

The following tools and services need to be installed on your development or production enviroment.
If these tools or services aren't installed yet, please follow the install guides of the tools or services itself.

***Required***
* git [download](https://git-scm.com/downloads)
* nodejs 14.17+ [download](https://nodejs.org/en/downloads)
* php 8.x [download](https://php.net/downloads.php)
* composer 2.2+ [download](http://getcomposer.org/dpownload)

***Optional***
* HTTP server with PHP support (e.g.: Apache, Nginx, Caddy)
* A supported database (e.g.: MySQL, MariaDB, PostgreSQL, Redis)


### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/OneForTheCode/Laravel-9-OFTC-Base.git
   ```
2. Change to the working directory
   ```sh
   cd Laravel-9-OFTC-Base
   ```
3. Install Composer packages (development)
   ```sh
   composer install -o
   ```
   Install Composer packages (production)
   ```sh
   composer install --no-dev -o
   ```
4. Install NPM packages
   ```sh
   npm install
   ```
5. Copy the example enviroment variables
   ```sh
   cp .env.example .env
   ```
6. Generate the application key in `.env`
   ```sh
   php artisan key:generate
   ```
   > :warning: **Warning:**
   > 
   > Never change the `APP_KEY` after installation on production enviroment. This wil result in all of your encrypted/hashed data being lost!

7. Running database migrations
   ```sh
   php artisan migrate
   ```
8. Build and run npm dependencies
   ```sh
   npm run dev
   ```

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## 3. Usage

After the installation you may configure your webserver to serve the `public` folder or launch
the localhost server (example below) and visit the page on [localhost:8000](http://127.0.0.1:8000).
```sh
php artisan serve
```

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTRIBUTING -->
## 4. Contributing

Contributions are what make the open source community such an amazing place to learn, inspire and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please for the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- LICENSE -->
## 5. License

Distributed under the MIT License. see [`LICENSE`](https://github.com/OneForTheCode/Laravel-9-OFTC-Base/blob/main/LICENSE) for more information.

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTACT -->
## 6. Contact

- [One For The Code](https://one-for-the-code.be) - info@oftc.be
- [All In One](https://all-in-one.be) - [@allinonebe](http//twitter.com/allinonebe) - info@all-in-one.be
- Project Link: [https://github.com/OneForTheCode/Laravel-9-OFTC-Base](https://github.com/OneForTheCode/Laravel-9-OFTC-Base)

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- MAINTAINERS -->
## 7. Maintainers
* Dennnis de Houx - dennis@aio.be

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- ACKNOWLEDGMENTS -->
## 8. Acknowledgments

* [Spatie](https://spatie.be)
* [barryvdh](https://github.com/barryvdh)
* [saadeghi](https://github.com/saadeghi)
* [ascsoftw](http://github.com/ascsoftw)
* [jantinnerezo](http://github.com/jantinnerezo)
* [Power-Components](http://github.com/Power-Components)
* [asantibanez)](https://github.com/asantibanez)
* [mediconesystems](https://livewire-datatables.com)

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
[Contributors-shield]: https://img.shields.io/github/contributors/OneForTheCode/Laravel-9-OFTC-Base.svg?style=for-the-badge
[Contributors-url]: https://github.com/OneForTheCode/Laravel-9-OFTC-Base/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/OneForTheCode/Laravel-9-OFTC-Base.svg?style=for-the-badge
[forks-url]: https://github.com/OneForTheCode/Laravel-9-OFTC-Base/network/members
[stars-shield]: https://img.shields.io/github/stars/OneForTheCode/Laravel-9-OFTC-Base.svg?style=for-the-badge
[stars-url]: https://github.com/OneForTheCode/Laravel-9-OFTC-Base/stargazers
[issues-shield]: https://img.shields.io/github/issues/OneForTheCode/Laravel-9-OFTC-Base.svg?style=for-the-badge
[issues-url]: https://github.com/OneForTheCode/Laravel-9-OFTC-Base/issues
[license-shield]: https://img.shields.io/github/license/OneForTheCode/Laravel-9-OFTC-Base.svg?style=for-the-badge
[license-url]: https://github.com/OneForTheCode/Laravel-9-OFTC-Base/blob/master/LICENSE
[download-shield]: https://img.shields.io/github/downloads/OneForTheCode/Laravel-9-OFTC-Base/total.svg?style=for-the-badge
[download-url]: https://github.com/OneForTheCode/Laravel-9-OFTC-Base/releases
[lastcommit-shield]: https://img.shields.io/github/last-commit/OneForTheCode/Laravel-9-OFTC-Base.svg?style=for-the-badge
[lastcommit-url]: https://github.com/OneForTheCode/Laravel-9-OFTC-Base/commits/main
