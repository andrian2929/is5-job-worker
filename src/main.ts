import { connectToRabbitMQ, startRabbitMQConsumer } from './rabbitmq'
import logger from './logger'

async function main() {
  try {
    const connection = await connectToRabbitMQ()
    process.once('SIGINT', () => connection.close())
    await startRabbitMQConsumer(connection)
  } catch (error) {
    const errorMessage = (error as Error).message
    logger.error(`Error in main function: ${errorMessage}`)
  }
}

main()
