#!/usr/bin/env pwsh

Write-Host "Welcome to the Brain Games!"
$name = Read-Host "May I have your name?"
Write-Host "Hello, $name!"
Write-Host "Answer 'yes' if the number is even, otherwise answer 'no'."

$correct_answers = 0
$rounds = 3

for ($i = 0; $i -lt $rounds; $i++) {
    $number = Get-Random -Minimum 1 -Maximum 100
    Write-Host "Question: $number"
    $answer = Read-Host "Your answer"

    $correct = if ($number % 2 -eq 0) { "yes" } else { "no" }

    if ($answer -eq $correct) {
        Write-Host "Correct!"
        $correct_answers++
    }
    else {
        Write-Host "'$answer' is wrong answer ;(. Correct answer was '$correct'."
        Write-Host "Let's try again, $name!"
        exit 1
    }
}

Write-Host "Congratulations, $name!"
