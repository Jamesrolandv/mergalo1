<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wp1' );

/** Database username */
define( 'DB_USER', 'james' );

/** Database password */
define( 'DB_PASSWORD', 'forward09' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'M5/.B!(q*hcX!u?P6qd%;0f=Oy`CTvg~77[3YPy3GW(xw2u-yRh3A}7Kf6,vnx d' );
define( 'SECURE_AUTH_KEY',  'XxXud,8~+umoQ_Qi2)%m*Q t|)*@d?809196$39xo(6M0<4XvBRP{kF*Xg1N,.?%' );
define( 'LOGGED_IN_KEY',    'RtE|GpegzzF[ZkOtM?6+.K^(&%(S8?E*,HPk0u#53#4om11zwv%+gY%FO8;uDBb5' );
define( 'NONCE_KEY',        '.S3 o76Pdl&LhzDjfQM)4pIcn8$i}+JyuBwl7v<wbiI#4$,d_Sa_$kudiPc,=ZPH' );
define( 'AUTH_SALT',        '@g^zC]J@B5is,0Qdb=am8UDDbO#7L)%,6IS($QqTWR_PcC:UNvS]:i=Heh;:*dm(' );
define( 'SECURE_AUTH_SALT', 'ejhp5qHMOG1xFFxX{fIWcTU):>X&>?PK*zt$4I/NL>.}/KS4WkG!1y#MS+96Lk:#' );
define( 'LOGGED_IN_SALT',   'g.7ohOV&(BY?&ha[=O<OpF-lccTDyS1L)_jznGt(5!1l}^5gv&hVb?iM*}@Wasu5' );
define( 'NONCE_SALT',       'EM#kaeJ=q<epoW9[<i8]H(eQY=##k!u04lb P;Mk#7*EF%c.U_cjr$ v#Lj+E= ~' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
