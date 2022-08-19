function calculaNota(ex, p1, p2) {
    let mediaAluno = ((ex * 1) + (p1 * 2) + (p2 * 3)) / (1 + 2 + 3)
    if (mediaAluno >= 9 ) {
        return mediaAluno = "A" 
 
    } if (mediaAluno < 9 && mediaAluno >=7.5 ) {
        return mediaAluno = "B"
    } if (mediaAluno < 7.5 && mediaAluno >= 6){
        return mediaAluno ="C"
    } if (mediaAluno < 6 ) {
        return mediaAluno = "D"
    }

  }