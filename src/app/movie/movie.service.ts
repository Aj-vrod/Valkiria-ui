import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { response } from "express";
import { Observable, catchError } from "rxjs";

export type Movie = {
    id?: number
    name: string
    genre: string
}

@Injectable({
    providedIn: 'root',
})
export class MovieService {
    private url = "http://localhost:8000"

    constructor(private http: HttpClient) {

    }

    getMovie(): Observable<Movie> {
        console.log(">>>>getMovie")
        return this.http.get<Movie>(`${this.url}/movies/5`)
    }
    
    // async getMovies() {
    //     // not implemented yet
    // }

    // async getMovie(genre: string) {
    //     // not implemented yet
    // }

    // async addMovie(data: Movie) {
    //     // not implemented yet
    // }

    // async deleteMovie(id: number) {
    //     // not implemented yet
    // }
}
