<template>
    <div class="form">
        <form>
            <p>Register</p>
            <div class="input">
                <span class="inputIcon">
                    <i class="fa-solid fa-envelope"></i>
                </span>
                <input type="email" class="inputTerm" placeholder="Email" />
            </div>
            <div class="input">
                <span class="inputIcon">
                    <i class="fa-solid fa-user"></i>
                </span>
                <input type="text" class="inputTerm" placeholder="Username" />
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
                <button class="submit">Register</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {};
</script>
