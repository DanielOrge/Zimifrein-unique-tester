package com.example.app

import java.time.LocalDateTime
import java.util.UUID

/**
 * Main application entry point
 */
fun main(args: Array<String>) {
    println("Hello, Kotlin!")
    
    val app = MyApplication()
    app.run()
}

/**
 * Main application class
 */
class MyApplication {
    private val logger = LoggerFactory.getLogger(this::class)
    
    fun run() {
        logger.info("Application started")
        
        val user = User(
            id = UUID.randomUUID().toString(),
            name = "John Doe",
            email = "john@example.com",
            createdAt = LocalDateTime.now()
        )
        
        println("User created: ${user.name}")
    }
}

/**
 * Data class for User
 */
data class User(
    val id: String,
    val name: String,
    val email: String,
    val createdAt: LocalDateTime,
    val isActive: Boolean = true
)

/**
 * Simple logger factory
 */
object LoggerFactory {
    fun getLogger(clazz: kotlin.reflect.KClass<*>): Logger {
        return Logger(clazz.simpleName ?: "Unknown")
    }
}

/**
 * Logger implementation
 */
class Logger(private val name: String?) {
    fun info(message: String) {
        println("[INFO] $name: $message")
    }
    
    fun error(message: String, exception: Throwable? = null) {
        println("[ERROR] $name: $message")
        exception?.printStackTrace()
    }
    
    fun debug(message: String) {
        println("[DEBUG] $name: $message")
    }
}

/**
 * Extension function example
 */
fun <T> List<T>.printAll() {
    this.forEach { println(it) }
}

/**
 * Higher-order function example
 */
fun <T, R> transform(items: List<T>, transform: (T) -> R): List<R> {
    return items.map(transform)
}
