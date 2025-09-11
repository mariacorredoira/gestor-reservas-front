import {ActivityDetailResponse} from './activity-detail-response.model';
export interface ReservationDetailResponse {
  activity : ActivityDetailResponse,
  reservationDate: string,
}
