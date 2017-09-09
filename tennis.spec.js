function TennisGame(){
    const scoreString = ['Love', 'Fifteen', 'Thirty', 'Forthy']
    this.playerAScore = 0
    this.playerBScore = 0

    this.echo = () => {
       return `${scoreString[this.playerAScore]} - ${scoreString[this.playerBScore]}`

   }
   this.reset = () => {
     this.playerAScore = 0;
     this.playerBScore = 0;
   }


}

test('Echo "Love - Love" when game start', () => {
    // Arrange
    let app = new TennisGame()

    // Act
    app.reset()
    let result = app.echo()

    // Assert
    expect(result).toBe('Love - Love')
})

test('Echo')
