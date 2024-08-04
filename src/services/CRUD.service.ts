import axios from "axios";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export class CRUDService<T> {
  private route: string;

  constructor(route: string) {
    this.route = baseUrl + route;
  }

  async create(data: T): Promise<T> {
    const response = await axios.post<T>(this.route, data);
    return response.data;
  }

  async read(id: string | number): Promise<T> {
    const response = await axios.get<T>(`${this.route}/${id}`);
    return response.data;
  }

  async update(id: string, data: T): Promise<T> {
    const response = await axios.put<T>(`${this.route}/${id}`, data);
    return response.data;
  }

  async delete(id: string): Promise<void> {
    await axios.delete(`${this.route}/${id}`);
  }

  async list(params?: unknown): Promise<T[]> {
    const response = await axios.get<T[]>(this.route, { params });
    return response.data;
  }
}
