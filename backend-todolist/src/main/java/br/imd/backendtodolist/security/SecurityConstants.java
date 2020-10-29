package br.imd.backendtodolist.security;

public final class SecurityConstants {
    public static final String AUTH_LOGIN_URL = "users/signin";

    // Signing key for HS512 algorithm
    // You can use the page http://www.allkeysgenerator.com/ to generate all kinds of keys
    public static final String JWT_SECRET = "x/A?D(G+KbPeShVmYq3t6v9y$B&E)H@McQfTjWnZr4u7x!z%C*F-JaNdRgUkXp2s";

    // JWT token defaults
    public static final String TOKEN_HEADER = "Authorization";
    public static final String TOKEN_PREFIX = "Bearer ";
    public static final String TOKEN_TYPE = "JWT";
    public static final String TOKEN_ISSUER = "secure-api";
    public static final String TOKEN_AUDIENCE = "secure-app";
    public static final Long EXPIRATION_DELAY = 864000000L;

    public static final String DEFAULT_USERNAME = "username";
    public static final String DEFAULT_PASSWORD = "username";
    public static final String DEFAULT_ROLE = "ROLE_USER";

    private SecurityConstants() {
        throw new IllegalStateException("Cannot create instance of static util class");
    }

}
