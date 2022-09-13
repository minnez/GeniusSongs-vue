<template>
    <div class="form">
        <form>
            <p>Login</p>
            <div class="input">
                <span class="inputIcon">
                    <i class="fa-solid fa-envelope"></i>
                </span>
                <input type="email" class="inputTerm" placeholder="Email" />
            </div>
            <div class="input">
                <span class="inputIcon">
                    <i class="fa-solid fa-lock"></i>
                </span>
                <input
                    type="password"
                    class="inputTerm"
                    placeholder="Password"
                />
            </div>
            <div>
                <button class="submit">Login</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {};
</script>

<style>
.form {
    background-color: #fff;
    color: #000;
    box-shadow: 1px 1px 25px rgba(0, 0, 0, 0.18);
    padding: 25px;
    border-radius: 8px;
}
.form .input {
    margin: 8px;
    border: 0.5px solid rgba(111, 216, 233, 1);
}
.form .inputIcon {
    color: rgb(8, 176, 201);
}
.form .submit {
    margin-left: 8px;
    background: rgb(227, 255, 248);
    background: linear-gradient(
        90deg,
        rgba(111, 216, 233, 1) 0%,
        rgba(117, 255, 220, 1) 61%,
        rgba(227, 255, 248, 1) 100%
    );
    color: #555;
    font-weight: 600;
}
.form p {
    font-weight: 400;
    margin-left: 8px;
}
</style>
